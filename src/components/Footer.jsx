import { Text, Link, Icon } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import "../index.css";
import "react-vertical-timeline-component/style.min.css";
import { Divider } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <div className="email">
        <Text marginTop="6" fontFamily="mono" textAlign="center">
          Get in touch <span className="wave">👉</span>{" "}
          <a className="mail" href="mailto:adhikacandra7@gmail.com">
            mail@to.com
          </a>
        </Text>
        <div className="linked">
          <Text fontSize="5xl" fontWeight="thin">
            <Link href="https://github.com/kara-code" isExternal>
              <Icon as={DiGithubBadge} />
            </Link>
          </Text>
          <div className="copyright">
            <p>&copy; 2022 KaraCode_</p>
          </div>
        </div>
      </div>
    </>
  );
}
