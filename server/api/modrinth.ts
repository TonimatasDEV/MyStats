interface ModrinthProject {
    title: string;
    downloads: number;
}

export default defineEventHandler(async () => {
    const projects = await $fetch<ModrinthProject[]>("https://api.modrinth.com/v2/user/tonimatasdev/projects") || []

    const names: string[] = []
    const values: any[] = []

    for (let i = 0; i < projects.length; i++) {
        const name: string = projects[i].title || ""

        if (name === "") {
            continue
        }

        names.push(name)
        values.push(projects[i].downloads)
    }

    return {
        names: names,
        values: values,
    }
})