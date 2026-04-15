import { Client } from "@notionhq/client";

const notion = new Client({ 
  auth: process.env.NOTION_SECRET,
  notionVersion: "2026-03-11" // Explicitly opt-in to the latest version
});

// Define the structure for posts
export interface Post {
  id: string;
  title: string;
  date: string;
  slug: string;
  tags: string[];
  content?: string;
}

export async function getBlogPosts(): Promise<Post[]> {
  // NEW ENDPOINT: dataSources.query
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
    filter: {
        and: [
            {
                property: "Status",
                select: { equals: "Published" },
            },
            {
                property: "in_trash",
                checkbox: { equals: false } 
            }
        ]
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Name?.title[0]?.plain_text || "Untitled",
    date: page.properties.Date?.date?.start || "No Date",
    slug: page.properties.Slug?.rich_text[0]?.plain_text || "",
    tags: page.properties.Tags?.multi_select.map((t: any) => t.name) || [],
  }));
}

// Function to fetch the actual content of a single post
export async function getPostContent(pageId: string) {
  const notion = new Client({ auth: process.env.NOTION_SECRET });
  
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });

  return response.results
    .map((block: any) => {
      switch (block.type) {
        case 'paragraph':
          return block.paragraph.rich_text[0]?.plain_text || "";
        case 'heading_1':
          return `# ${block.heading_1.rich_text[0]?.plain_text || ""}`;
        case 'heading_2':
          return `## ${block.heading_2.rich_text[0]?.plain_text || ""}`;
        case 'code':
          return `\n\`\`\`${block.code.language}\n${block.code.rich_text[0]?.plain_text}\n\`\`\`\n`;
        case 'bulleted_list_item':
          return `* ${block.bulleted_list_item.rich_text[0]?.plain_text || ""}`;
        default:
          return "";
      }
    })
    .join("\n\n");
}