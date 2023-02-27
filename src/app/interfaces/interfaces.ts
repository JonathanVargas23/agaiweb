export interface News {
  code: string;
  title: string;
  image: string;
  content: string;
  tag: string;
  date_published: string;
  date_record: string;
  source: string;
}

interface Search {
}

export interface ResponseNews {
  next_page: string;
  previous_page?: any;
  max_pages: number;
  rows: News[];
  total_rows: string;
  search: Search;
}