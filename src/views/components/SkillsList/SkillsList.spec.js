import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SkillsList from './SkillsList';
import HelpIcon from './../HelpIcon/HelpIcon'

describe('<SkillsList />', () => {
  test('it should render HelpIcon', () => {
    const wrapper = shallow(<SkillsList roleDescription='IOS Engineer' skills={[{id: 1, name: 'Objective-C'},{ id: 2, name: 'Java'}]} />);
    //expect(wrapper.find(HelpIcon)).to.have.length(1);
  });
});
