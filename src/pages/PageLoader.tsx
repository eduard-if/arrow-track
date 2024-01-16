import {Center, Loader} from '@mantine/core';

const PageLoader = () => {
  return (
    <Center h={'80vh'}>
      <Loader color='red' type='bars' size={'xl'} />
    </Center>
  );
};

export default PageLoader;
