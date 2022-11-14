import { get, post } from './api-calls';

export default async (e, setTasks, setShowPopup, setError) => {
  e.preventDefault();
  const form = e.target;
  const caller = form.elements.caller.value === 'other' ? form.elements.othercaller.value : form.elements.caller.value;

  const task = {
    organization: `Org${form.elements.organization.value}`,
    caller,
    taskDescription: form.elements.taskDescription.value,
    date: Math.round(new Date().getTime() / 1000),
    organizationId: form.elements.organization.value,
  };

  const newTasks = await post('/api/tasks', task);
  if (!Object.getOwnPropertyDescriptor(newTasks, 'error')) {
    setTasks(await get('/api/tasks'));
    setShowPopup(false);
  } else {
    setError('There seems to have been an error..');
  }
};
