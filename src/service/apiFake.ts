import { dataResponseAPIFake } from "./dataResponse";
import { OptionResponseFakeType } from "./type";

export const GetOptionsSelect = ():Promise<OptionResponseFakeType>=> {
    return new Promise((resolve,)=> {
        const responseTime = 1500;
        setTimeout(() => resolve({ data: dataResponseAPIFake }), responseTime);
    })
}
