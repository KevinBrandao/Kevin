import fs from 'fs/promises'
import { google } from 'googleapis'
import path from 'path'

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json')

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist(): Promise<any | null> {
  try {
    const parsedToken = JSON.parse(process.env.TOKEN_GOOGLE || '{}')
    return google.auth.fromJSON(parsedToken) as unknown as any
  } catch (err) {
    return null
  }
}

/**
 * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
 *
 * @param {string} auth
 * @return {Promise<void>}
 */
async function saveCredentials(auth: string) {
  process.env.TOKEN_GOOGLE = JSON.stringify(auth)
}

/**
 * Load or request or authorization to call APIs.
 *
 */
export async function authorize() {
  let client = await loadSavedCredentialsIfExist()
  if (client) {
    return client
  }
  const credentials = JSON.parse(process.env.CREDENTIALS_GOOGLE || '{}')
  client = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key
    },
    projectId: credentials.project_id,
    scopes: SCOPES,
  })
  if (await client.getCredentials()) {
    await saveCredentials(client)
  }
  return client
}
