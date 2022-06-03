import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//axios.defaults.baseURL = 'https://629734048d77ad6f75fd043c.mockapi.io/api/v1';

const BASE_URL = 'https://629734048d77ad6f75fd043c.mockapi.io/api/v1/';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// ? Vanilla methods
//export const contactsFetch = () => async dispatch => {
//  dispatch(fetchContactsPadding());
//
//  try {
//    const request = await axios.get('/contacts');
//    dispatch(fetchContactsSuccess(request.data));
//  } catch (error) {
//    dispatch(fetchContactsError(error));
//  }
//};

//export const contactAdd = (name, number) => async dispatch => {
//  const contact = { id: nanoid(), name: name, phone: number };
//  dispatch(addContactPadding());
//
//  try {
//    const request = await axios.post('/contacts', contact);
//    dispatch(addContactSuccess(request.data));
//  } catch (error) {
//    dispatch(addContactError(error));
//  }
//};

//export const contactDelete = id => async dispatch => {
//  dispatch(deleteContactPadding());
//
//  try {
//    await axios.delete(`/contacts/${id}`);
//    dispatch(deleteContactSuccess(id));
//  } catch (error) {
//    dispatch(deleteContactError(error));
//  }
//};
