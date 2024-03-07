import { shallowMount } from '@vue/test-utils';
import JobItem from '@/components/JobItem.vue';

describe('JobItem.vue', () => {
  it('renders job details', () => {
    const job = {
      headline: 'Software Engineer',
      description: 'Develop amazing things.',
      classification: 'Engineering',
      location: 'Berlin',
      date_added: '2021-04-22',
    };

    const wrapper = shallowMount(JobItem, {
      propsData: { job },
    });

    expect(wrapper.text()).toContain(job.headline);
    expect(wrapper.text()).toContain(job.description);
    expect(wrapper.text()).toContain(job.classification);
    expect(wrapper.text()).toContain(job.location);
    expect(wrapper.text()).toContain('April 22, 2021');
  });
});
