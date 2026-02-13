import { remark } from 'remark';
import html from 'remark-html';

/**
 * Convert Markdown string to HTML
 * @param markdown - Raw Markdown content
 * @returns HTML string
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  try {
    const result = await remark()
      .use(html, { sanitize: false })
      .process(markdown);

    return result.toString();
  } catch (error) {
    console.error('Error converting Markdown to HTML:', error);
    throw new Error(
      `Failed to convert Markdown: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
