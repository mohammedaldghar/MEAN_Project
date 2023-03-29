export interface Book {
    _id: string
    id: number
    Name: string
    photo: string
    CategoryId: string
    AuthorId: string
    Rating: number
    Reviews: any[]
    __v: number
}
