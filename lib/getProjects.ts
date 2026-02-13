import fs from 'fs';
import path from 'path';
import { Project, ProjectMeta } from './types';

/**
 * Get all projects from the filesystem
 * @returns Array of Project objects
 */
export function getProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), 'projects');

  // Check if projects directory exists
  if (!fs.existsSync(projectsDirectory)) {
    console.warn('Projects directory does not exist');
    return [];
  }

  try {
    // Read all subdirectories in /projects/
    const projectSlugs = fs
      .readdirSync(projectsDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    const projects: Project[] = [];

    for (const slug of projectSlugs) {
      const projectDir = path.join(projectsDirectory, slug);
      const metaPath = path.join(projectDir, 'meta.json');
      const contentPath = path.join(projectDir, 'content.md');

      try {
        // Read and parse meta.json
        if (!fs.existsSync(metaPath)) {
          console.error(`meta.json not found for project: ${slug}`);
          continue;
        }

        const metaContent = fs.readFileSync(metaPath, 'utf-8');
        const meta: ProjectMeta = JSON.parse(metaContent);

        // Read content.md
        if (!fs.existsSync(contentPath)) {
          console.error(`content.md not found for project: ${slug}`);
          continue;
        }

        const content = fs.readFileSync(contentPath, 'utf-8');

        // Build Project object
        projects.push({
          meta,
          content,
          coverUrl: meta.coverUrl,
        });
      } catch (error) {
        console.error(`Error processing project ${slug}:`, error);
        throw new Error(
          `Failed to process project "${slug}": ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    }

    return projects;
  } catch (error) {
    console.error('Error reading projects directory:', error);
    throw new Error(
      `Failed to read projects: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
