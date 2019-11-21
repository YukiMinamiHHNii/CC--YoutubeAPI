const axios = require("axios");

exports.getChannelInfo = (req, res) => {
	return axios
		.get(`${process.env.YOUTUBE_ENDPOINT}/channels`, {
			params: {
				id: `${process.env.CHANNEL_ID}`,
				key: `${process.env.YOUTUBE_KEY}`,
				part: "id,snippet",
				fields: "items(id,snippet(title,description,thumbnails(medium)))"
			}
		})
		.then(response => {
			return res.json(response.data);
		})
		.catch(error => {
			return res.json({
				status: "error",
				msg: "Error while communicating with external API"
			});
		});
};

exports.getVideoInfo = (req, res) => {
	const query = { ...req.query };
	return axios
		.get(`${process.env.YOUTUBE_ENDPOINT}/search`, {
			params: {
				channelId: `${process.env.CHANNEL_ID}`,
				key: `${process.env.YOUTUBE_KEY}`,
				part: "snippet",
				type: "video",
				q: `${query.term}`,
				maxResults: query.hasOwnProperty("maxResults") ? query.maxResults : 12,
				//pageToken: "TODO",
				fields:
					"pageInfo,prevPageToken,nextPageToken,items(id(videoId),snippet(title,description,thumbnails(medium)))"
			}
		})
		.then(response => {
			return res.json(response.data);
		})
		.catch(error => {
			return res.json({
				status: "error",
				msg: "Error while communicating with external API"
			});
		});
};
