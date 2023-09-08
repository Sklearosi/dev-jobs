

export type MainPageType = {
    id: number,
    logo: string,
    postedAt: string,
    position: string,
    logoBackground: string,
    company: string,
    location: string,
    apply: string,
    contract: string, 
    description: string, 
    requirements: {
        content: string,
        items: string[],
    }, 
    role: {
        content: string,
        items: string[],
    }, 
    website: string, 
    _id: string, 
};