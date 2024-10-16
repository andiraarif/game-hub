import platform from "../data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platform,
  error: null,
  isLoading: false,
});

export default usePlatforms;
