interface ProjectStats {
    downloads: number;
}

interface HangarProject {
    name: string;
    stats: ProjectStats;
}

export default defineEventHandler(async () => {
    const project = await $fetch<HangarProject>("https://hangar.papermc.io/api/v1/projects/PerWorldPlugins")

    const names: string[] = []
    const values: any[] = []

    const name: string = project?.name || ""

    if (name !== "") {
        names.push(name)
        values.push(project?.stats?.downloads)
    }

    return {
        names: names,
        values: values,
    }
})