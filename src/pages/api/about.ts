import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      data: "Result driven Software Engineer with 2 years of professional development experience. Proficient in Full-Stack development. Led the frontend from conception to delivery of the SHINE app on PlayStore which has 500+ downloads. Have experience in Salesforce migration projects, transforming Process Builders to Flows for streamlined automations. Skilled in coding triggers, batch classes and schedulable classes, with focus on minimising the error.",
    });
}
