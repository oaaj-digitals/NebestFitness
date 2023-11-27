import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Feed {
	id: string;
	media_type: string;
	permalink: string;
	media_url: string;
	thumbnail_url: string;
	username: string;
	caption: string;
	timestamp: string;
}

interface FetchFeedResponse {
	data: Feed[];
}

const useFeeds = () => {
	const [feeds, setFeeds] = useState<Feed[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<FetchFeedResponse>("/JjXVSpfOgkEmSfhC", {
				signal: controller.signal,
			})
			.then((res) => setFeeds(res.data.data))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { feeds, error };
};

export default useFeeds;
