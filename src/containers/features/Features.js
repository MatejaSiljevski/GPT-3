import React from 'react';
import { Feature } from '../../components';
import './features.css'

const featuresData = [
  {
    title:'Improving and distrusts instantly',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia impedit molestias, corrupti, eligendi enim ad rerum fugiat vitae pariatur laboriosam ipsa ipsam.'
  },
  {
    title:'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nihil nemo rem, facilis laboriosam illum consequatur, voluptatem sint neque libero, blanditiis accusamus ut!'
  },
  {
    title:'Message or am nothing',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque perferendis consectetur eius incidunt, perspiciatis quia? Cupiditate blanditiis doloremque exercitationem, repellat harum atque.'
  },
  {
    title:'Really boy law county',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quod! Expedita, deserunt? Vero recusandae eum aliquam voluptatem temporibus quaerat iure veniam quod voluptas.'
  },
]

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is now and You just need to Realize it. Step into the Future Today & Make it Happen
        </h1>
        <p>Request Early Acces to Get Started</p>
      </div>
      <div className="gpt3__features-container">
          {featuresData.map((item) => (
            <Feature title={item.title} text={item.text} key={item.title}/>
          ))}
      </div>
    </div>
  )
}
export default Features;
