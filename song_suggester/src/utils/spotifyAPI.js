const baseUrl = "https://accounts.spotify.com/authorize";
const clientID = "46e78711e2c14c21a689149e27b79266";
const redirect = "https://songsuggester-ewmsbuz2h.now.sh/dashboard";
const scope = "user-read-private";
export const url = `${baseUrl}?client_id=${clientID}&redirect_uri=${redirect}&scope=${scope}&response_type=token`;
