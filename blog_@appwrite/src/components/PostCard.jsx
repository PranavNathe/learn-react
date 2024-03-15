import React from 'react'
import service from '../appwrite/congfig.service'
import { Link } from 'react-router-dom'
import {Card, CardFooter, CardBody, Image} from "@nextui-org/react";

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <Card shadow="sm" isPressable>
            <CardBody className="overflow-visible py-2">
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={title}
                className="w-full object-cover h-[140px]"
                src={service.getFilePreview(featuredImage)}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{title}</b>
                {/* <p className="text-default-500">{sample.code}</p> */}
            </CardFooter>
        </Card>
    </Link>
  )
}

export default PostCard