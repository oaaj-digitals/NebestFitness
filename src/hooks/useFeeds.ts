import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Feed {
	id: string;
	permalink: string;
	media_url: string;
	thumbnail_url: string;
	caption: string;
}

interface FetchFeedResponse {
	data: Feed[];
}

const useFeeds = () => {
	const [feeds, setFeeds] = useState<Feed[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState<boolean>(true);

	const accessToken = import.meta.env.VITE_USER_ACCESS_TOKEN;

	useEffect(() => {
		const controller = new AbortController();

		// Set initial value to avoid display of all at the same time
		setError("");
		setFeeds([]);
		setLoading(true);

		apiClient
			.get<FetchFeedResponse>(
				`/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${accessToken}`,
				{
					signal: controller.signal,
				}
			)
			.then((res) => {
				setFeeds(res.data.data);
				setLoading(false);
				setError("");
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
				setFeeds([]);
			});

		return () => controller.abort();
	}, []);

	return { feeds, error, isLoading };
};

export default useFeeds;
