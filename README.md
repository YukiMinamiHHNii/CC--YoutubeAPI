# CC--YoutubeAPI
Node.js API for Youtube API consumption as required by Cultura Colectiva recruitment process.

## Usage
-	Download this project and create an .env file at root folder (there is a template of the file already *.env.example*), it must have the following parameters:

	- SERVER_PORT: Port number in which the api will be accessible
	- YOUTUBE_ENDPOINT: Youtube API endpoint URL (https://www.googleapis.com/youtube/v3)
	- YOUTUBE_KEY: Youtube API key 
	- CHANNEL_ID: Youtube channel from which the info will be extracted key (example: UCV0qA-eDDICsRR9rPcnG7tw) 

- Install project dependencies (*npm install*) and then run it either by using *npm start* command or Docker.

## Endpoints
- /api/channel
Retrieves info for the channel configured on *.env* file.

- /api/video
Retrieves video info based on query parameters, valid parameters:
	- term: word used to search for video topics on the channel.
	- maxResults: defines the amount of results to be shown.
	- page: retrieves results based on pagination
