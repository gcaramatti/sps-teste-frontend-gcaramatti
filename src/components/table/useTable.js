export function useTable() {
    function getValueByPath(obj, path) {
        if (!path) return obj;

        const normalized = path.replace(/\[(\d+)\]/g, ".$1");
        return normalized.split(".").reduce((acc, key) => {
            if (acc == null) return undefined;
            return (acc)[key];
        }, obj);
    } 

    return { getValueByPath }
}