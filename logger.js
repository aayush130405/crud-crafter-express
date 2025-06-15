//creating the logger
import { format,transports,createLogger } from "winston";
const {combine,json,colorize} = format;

//add custom logging format
const consoleLogFormat=format.combine(
    format.colorize(),
    format.printf(({level,message})=>{
        return `${level} - ${message}`;
    })
)

//create a winston logger
const logger=createLogger({
    level:'info',
    format:combine(
        colorize(),
        json()
    ),
    transports:[
        new transports.Console({
            format:consoleLogFormat
        }),
        new transports.File({filename:'app.log'})
    ]
});

export default logger;