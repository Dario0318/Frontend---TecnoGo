export type FilterTypes = {
    result:ResultFilterTypes | null ,
    loading:boolean,
    error:string
}
export type ResultFilterTypes = {
    data:{
    schema:{
        attributes:{
            origin:{
                enum:string[],
            },
            Disponibilidad:{
                enum:string[],
            }
        }
    }
  }
}