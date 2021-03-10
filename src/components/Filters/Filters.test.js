import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Filters } from './Filters';
import Filter from './Filter/Filter';

configure({ adapter: new Adapter() })

describe("<Filters /> ", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Filters />);
    });

    it("should render <Filter /> element", () => {
        wrapper.setProps({ species: [], gender: [], type: [], status: [] });
        expect(wrapper.find(Filter)).toHaveLength(4);
    })
})