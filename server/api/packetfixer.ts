interface MetaResponse {
    meta: {
        total: number;
    };
}

export default defineEventHandler(async () => {
    const data= await $fetch<MetaResponse>('https://www.modpackindex.com/api/v1/modpacks?limit=1&page=1')
    const total = data?.meta?.total || 0
    const dataPacketFixer = await $fetch<MetaResponse>('https://www.modpackindex.com/api/v1/mod/39585/modpacks?limit=3&page=1')
    const packetFixer = dataPacketFixer?.meta?.total || 0
    return {
        total: total,
        packetFixer: packetFixer,
    }
})