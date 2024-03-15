const config = {
  appwriteApiUrl: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT_URL),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  TinyMCE_API_Key: String(import.meta.env.VITE_TinyMCE_API_KEY),
}

export default config;