import React from 'react';

interface Data {
  id: string;
  color: string;
  projectName: string;
  description: string

}

const ProjectData: Data[] = [
  { id: "01", color: "#014f5e", projectName: "ThriftAid", description: 'hello'},
];

export default ProjectData;