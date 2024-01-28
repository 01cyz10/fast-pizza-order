import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../service/apiGeocoding';

/**
 * Get user geolocation, need user allow browser share location
 */
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/**
 * This thunk is responsible for fetching the user's geolocation position, then using a reverse geocoding API to obtain a description of the user's address
 */
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) use a reverse geocoding API to get a description of the user's address, to display it the order form as defaultValue, user can correct this value if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) return an object with the data
    return { position, address };
  },
);

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = 'There was a problem acquired user position';
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
