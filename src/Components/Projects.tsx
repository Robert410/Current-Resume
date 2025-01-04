import {  Text, Image, Separator } from '@fluentui/react';
import "./test.css";

export const Projects = () => {
  return (<>
    <div className="image-text-page">
      <div className="row">
        <Image src="https://via.placeholder.com/150" alt="Placeholder" className="image" />
        <Text className="text">This is some text aligned to the right.</Text>
      </div>
      <Separator />
      <div className="row">
        <Text className="text">This is some text aligned to the left.</Text>
        <Image src="https://via.placeholder.com/150" alt="Placeholder" className="image" />
      </div>
      <Separator />
      <div className="row">
        <Image src="https://via.placeholder.com/150" alt="Placeholder" className="image" />
        <Text className="text">This is some text aligned to the left.</Text>
      </div>
      <Separator />
      <div className="row">
        <Text className="text">This is some text aligned to the left.</Text>
        <Image src="https://via.placeholder.com/150" alt="Placeholder" className="image" />
      </div>
    </div>
    </>
  );
}
