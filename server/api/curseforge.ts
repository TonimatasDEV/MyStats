interface Project {
    id: string;
    name: string;
}

interface AuthorData {
    projects: Project[];
}

interface ProjectData {
    downloads: {
        total: number;
    };
}

export default defineEventHandler(async () => {
    const data = await $fetch<AuthorData>("https://api.cfwidget.com/author/101247842")

    const projects = data?.projects || []
    const names: string[] = []
    const values: any[] = []

    for (let i = 0; i < projects.length; i++) {
        const rawName: string = projects[i].name || ""

        if (rawName.startsWith("project") || rawName === "") {
            continue
        }

        const name: string = rawName.replace(" [Updated]", "")

        names.push(name)
        const projectData = await $fetch<ProjectData>("https://api.cfwidget.com/" + projects[i].id)
        values.push(projectData?.downloads?.total)
    }

    return {
        names: names,
        values: values,
    }
})