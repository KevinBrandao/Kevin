import { authorize } from 'services/google_authentication'
import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import { Presence, presenceInfoValidator } from 'services/presenca_infos'
import { z } from 'zod'
import type { sheets_v4 } from 'googleapis/build/src/apis/sheets/v4'

const sheets = google.sheets('v4')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      presenceInfoValidator.parse(req.body)
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).send(err.message)
        return
      }
      res.status(500).send('Erro interno')
    }
    const values = fillValues(req.body as Presence)
    const request: sheets_v4.Params$Resource$Spreadsheets$Values$Append = {
      // The ID of the spreadsheet to update.
      spreadsheetId: process.env.SPREADSHEET_ID,

      // The A1 notation of a range to search for a logical table of data.
      // Values are appended after the last row of the table.
      range: 'A1',
      // How the input data should be interpreted.
      valueInputOption: 'USER_ENTERED',
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS',

      requestBody: {
        values,
      },
      auth: await authorize(),
    }
    try {
      const response = (await sheets.spreadsheets.values.append(request)).data
      // TODO: Change code below to process the `response` object:
      console.log(JSON.stringify(response, null, 2))
      res.status(200).send('ok')
    } catch (err) {
      console.error(err)
      res.status(400).send(err || 'Erro interno')
    }
  } else {
    res.status(404).send('not found')
  }
}

function fillValues(values: Presence) {
  const spreadsheetValues = [[values.nome, values.telefone]]
  if (values.qtdePessoas > 1) {
    values.nomes?.forEach((nome) => {
      spreadsheetValues.push([nome.nome, values.telefone])
    })
  }
  return spreadsheetValues
}
