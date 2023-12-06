import { DownloadOutlined ,ContactsOutlined,GithubOutlined ,LinkedinOutlined} from '@ant-design/icons';

export const navOptions = [
  {
    label: "About us ",
    key: "about",
  },
  {
    label: "Experience",
    key: "experience",
  },
  {
    label: "Projects",
    key: "projects",
  },
  {
    label: "Contact",
    key: "contact",
  },
  
];
export const buttonOptions =[{
  key :"downloade",
  text :"Downloade CV",
  icon : <DownloadOutlined />

},
{
  key :"contact",
  text :"Contact Info",
  icon : <ContactsOutlined />

},

{
  key :"linkedin",
  text :"",
  icon :<LinkedinOutlined />,
  

},
{
  key :"github",
  text :"",
  icon : <GithubOutlined />

}]
