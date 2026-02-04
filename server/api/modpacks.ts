interface MetaResponse {
    meta: {
        total: number;
    };
}

export default defineEventHandler(async (event) => {
    const { id } = getQuery<{ id?: string }>(event)
    const data = await $fetch<MetaResponse>('https://www.modpackindex.com/api/v1/modpacks?limit=1&page=1')
    const total = data?.meta?.total || 0
    const modData = await $fetch<MetaResponse>('https://www.modpackindex.com/api/v1/mod/'+ id + '/modpacks?limit=3&page=1')
    const mod = modData?.meta?.total || 0
    return {
        total: total,
        modpackCount: mod,
    }
})