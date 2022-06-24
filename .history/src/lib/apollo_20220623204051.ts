import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: IMPORT,
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwMjczOTEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG5nNmYzeDAzNHMwMXowYWNxeWdibHgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjY0MmU0MzgtMTQyYi00NTRkLWI3OWEtZGY3M2QxOTM1YjY4IiwianRpIjoiY2w0cm55OHc0MWN4YzAxeXk2MXU2ZTZlOSJ9.oLREC6m-1xmZwGe8_teQEhRq3YXOZK1jjmYxo6c_x37CB1BgBOx3WbmJyXUQhDbjohvnefsHPOERZFMybfhvaWFCbbMtAHsUbr3UqkaJfwNmDfBcXhzguzef850DNDPGWNBfGZt0XlCxa0aDiQzNBKPfz1ZCg1oPzMWHlPAlJQTgHmDlxI3IOQJyks3TT8Qr_Rbzu6x1yUvJD3somRAfkYrMBvtSkLxBC7ahWsbM6LHM3wKUQ0A_t33ZIZ9BR0GY8kLY47rwk3SIAoTxEFW8qLVljn97VhnnmH8g-b2WU54ne4fHnQg4PH0Ne2lc6JKfQ_GX8-euZIyDGlSs6tc2bV48QzU5kpyGqkLwc1sYxsfkKnq4dWPbSQkZ4dtWX3BwbDZVzvkjh8jEQXErEXIjrckFj_xEU8EVWGopfUmxK8p2wPMamIVCd7C3lAbB9FNru3AAg_gFAONa-nyZKjlBvQXTNj3ZedBXICS63aqiIS4JBUyRH4-kG2XnAtvM80BY35eRJTG2YhBRb_QVctZYtHcOIgNcbHDGwue55SyC95WghZ8lb00LuOxtp6e8LYXpqw-5_muCYPZP2mTVqvxk7j8SiXOMhDFP3RM7708L7OuN_KKlgzBT3mkcqdX2CwgPhhMSf2YjwgMDjXQyBnJ5yUF7N2dEERvb0W2bkxUdSFA'
    },
    cache: new InMemoryCache(),
})