import { servicesImg1 } from "../utils";
import {
  Card,
} from "./ui/card";

const SkillCard = ({ cardTitle, skills, path }: Props) => {
  return (
    <Card className="services-card">
      <div className="card-header">
        <img src={servicesImg1} alt="Designing Icon" />
        <p className="w-full text-2xl font-[500] text-start">{cardTitle}</p>
      </div>

      <div className="card-content">
        {skills &&
          skills.map((skill: string, index: any) => (
            <div
              key={index}
              className="py-2 px-5 flex-center bg-[#000024] rounded-full w-fit text-sm"
            >
              <p>{skill}</p>
            </div>
          ))}
      </div>
      <div className="card-footer">
        <a href={path} className="w-full">
          <button className="primary-button w-full border">
            Explore Now
            <i className="fa-solid fa-arrow-right ml-2" id="card-arrow"></i>
          </button>
        </a>
      </div>
    </Card>
  );
};

type Props = {
  cardTitle: string;
  skills?: any;
  path: string;
};

export default SkillCard;
