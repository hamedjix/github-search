import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  CardFooter,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Link,
} from "@chakra-ui/react";
import { VscRepoForked, VscStarEmpty, VscQuestion } from "react-icons/vsc";

type Props = {
  repo: IRepository;
};

const RepoCard = ({ repo }: Props) => {
  return (
    <Card h="60" overflow="hidden">
      <CardHeader pb={1}>
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar name={repo.owner.login} src={repo.owner.avatar_url} />
            <Box>
              <Heading size="sm">{repo.owner.login}</Heading>
              <Link href={repo.owner.html_url} textDecor="none">
                view profile
              </Link>
            </Box>
          </Flex>
          <Text>{repo.language}</Text>
        </Flex>
      </CardHeader>
      <CardBody h={20}>
        <Link href={repo.html_url}>
          <Heading size="md" mb={3}>
            {repo.name}
          </Heading>
        </Link>
        <Text fontSize={15} noOfLines={2}>
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
