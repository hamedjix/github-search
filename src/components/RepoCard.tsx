import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  CardFooter,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { VscRepoForked, VscStarEmpty, VscQuestion } from "react-icons/vsc";

type Props = {
  repo: IRepository;
};

const RepoCard = ({ repo }: Props) => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={repo.owner.login} src={repo.owner.avatar_url} />
            <Box>
              <Heading size="sm">{repo.name}</Heading>
              <Text>user: {repo.owner.login}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<VscRepoForked />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          {(repo.description && repo.description.slice(0, 140)) ||
            "No description given."}
        </Text>
      </CardBody>
      <CardFooter>
        <HStack spacing={4}>
          <Tag variant="subtle" colorScheme="gray">
            <TagLeftIcon boxSize="16px" as={VscStarEmpty} />
            <TagLabel>
              {repo.stargazers_count
                ? repo.stargazers_count.toLocaleString()
                : 0}
            </TagLabel>
          </Tag>
          <Tag variant="subtle" colorScheme="gray">
            <TagLeftIcon boxSize="16px" as={VscRepoForked} />
            <TagLabel>{repo.forks ? repo.forks.toLocaleString() : 0}</TagLabel>
          </Tag>
          <Tag variant="subtle" colorScheme="gray">
            <TagLeftIcon boxSize="16px" as={VscQuestion} />
            <TagLabel>
              {repo.open_issues ? repo.open_issues.toLocaleString() : 0}
            </TagLabel>
          </Tag>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;
