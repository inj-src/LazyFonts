import '../../index.d';

export const storage = {
    set(key: string, value: any){
        if(chrome.storage) {
            return chrome.storage.local.set({[key]: value})
        }
        localStorage.setItem(key, JSON.stringify(value))
        return new Promise((resolve) => {
            resolve("")
        })
    },

    async get(key: string){
        if(chrome.storage){
            const storedValue = await chrome.storage.local.get([key])
            if(!Object.keys(storedValue).length) return null            
            return storedValue
        }
        const storedValue = localStorage.getItem(key)
        if(storedValue == null) return null;
        return {[key]: JSON.parse(storedValue)}
    }   
}





