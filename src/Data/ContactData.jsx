
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

export const ContactData = [
    {
        title: "Address",
        details: "4648 Rocky Road Philadelphia PA",
        iconBlue: (<ImLocation className='blue-color-text'/>),
        iconWhite: (<ImLocation className='text-white'/>),
        haveBorder: true

    },
    {
        title: "Send Email",
        details: "info@example.com",
        iconBlue: (<IoMdMail  className='blue-color-text'/>),
        iconWhite: (<IoMdMail  className='text-white'/>),
        haveBorder: true
    },
    {
        title: "Call Emergency",
        details: "+88 0123 654 99",
        iconBlue: (<FaPhoneFlip className='blue-color-text'/>),
        iconWhite: (<FaPhoneFlip className='text-white'/>)
    }
]