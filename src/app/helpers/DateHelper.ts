
export class DateHelper {

    public static reformatDate(date: string){
        const dateComponents = date.split('-');
        const dateObject = new Date(parseInt(dateComponents[0]), parseInt(dateComponents[1]) - 1, parseInt(dateComponents[2]));

        return dateObject.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

}