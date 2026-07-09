export type Article = {
  id: string
  title: string
  slug: string
  subtitle: string | null
  content: any // TipTap JSON
  excerpt: string | null
  thumbnail_url: string | null
  category: string | null
  meta_description: string | null
  og_image_url: string | null
  schema_markup: any | null
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
  updated_at: string
}

export type ArticleInput = Omit<Article, 'id' | 'created_at' | 'updated_at'>
