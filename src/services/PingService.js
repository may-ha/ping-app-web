import HttpRequest from "../utils/HttpRequest"
export default class PingService{
    ping(host,count){
       return  HttpRequest('ping',{'url':host,'count':count},'POST');
    }
    getTopFive(){
        return HttpRequest('topfive','GET');
    }
}