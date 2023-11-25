
export class FileHelper {

    
    public static async getFilePath(file: File){

        return new Promise<string>((resolve) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result as string)
            reader.readAsDataURL(file)
        })

    }

}