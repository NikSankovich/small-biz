import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useParams } from "react-router"
import MapDisplay from "./Map"

export default function Business(props) {
    // const id = props.match.params.id
    // const business = props.businesses.find((b) => b.id == id)

    const id = useParams().id
    const business = props.businesses.find((b) => b.id === Number(id))

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h3" component="div">
                    {business.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {business.address}
                </Typography>
                <Typography variant="h5" component="div">
                    {business.hours}
                </Typography>
                <Typography variant="body2">{business.description}</Typography>
                <MapDisplay address={business.address} />
            </CardContent>
            <CardActions></CardActions>
        </Card>
    )
}