import { FaDocker, FaPython, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiAnsible, SiNodedotjs } from "react-icons/si";

const SkillModel = [
  {
    className: "docker",
    text: "Docker",
    url: "https://docs.docker.com/",
    icon: (
      <FaDocker
        style={{
          color: "#08D0F9",
          width: "4rem",
          height: "4rem",
        }}
      />
    ),
  },
  {
    className: "terraform",
    text: "Terraform",
    url: "https://developer.hashicorp.com/terraform/docs",
    icon: (
      <SiTerraform
        style={{
          color: "#7D3AEB",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "python",
    text: "Python",
    url: "https://docs.python.org/3/",
    icon: (
      <FaPython
        style={{
          color: "#3069DE",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "k8s",
    text: "Kubernetes",
    url: "https://kubernetes.io/docs/home/",
    icon: (
      <SiKubernetes
        style={{
          color: "#3069DE",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "ansible",
    text: "Ansible",
    url: "https://docs.ansible.com/",
    icon: (
      <SiAnsible
        style={{
          color: "#000",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "node",
    text: "nodejs",
    url: "https://nodejs.org/docs/latest/api/",
    icon: (
      <SiNodedotjs
        style={{
          color: "#509941",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "node",
    text: "Jenkins",
    url: "https://www.jenkins.io/doc/",
    icon: (
      <FaJenkins
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
];

export default SkillModel;
