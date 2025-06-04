interface SpigetProject {
    name: string;
    downloads: number;
}

export default defineEventHandler(async () => {
    const projects = await $fetch<SpigetProject[]>("https://api.spiget.org/v2/authors/803111/resources") || []

    const names: string[] = []
    const values: any[] = []

    for (let i = 0; i < projects.length; i++) {
        const name: string = projects[i].name || ""

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