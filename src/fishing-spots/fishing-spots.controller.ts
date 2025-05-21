import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FishingSpotsService } from './fishing-spots.service';
import { CreateFishingSpotDto } from './dto/create-fishing-spot.dto';
import { UpdateFishingSpotDto } from './dto/update-fishing-spot.dto';
import { Auth } from 'src/iam/authentication/decorators/auth.decorator';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';
import { ActiveUser } from 'src/iam/authentication/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { FishingSpot } from './entities/fishing-spot.entity';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('fishing-spots') // Defines the API category
@Controller('fishing-spots')
export class FishingSpotsController {
  constructor(private readonly fishingSpotsService: FishingSpotsService) {}

  @Auth(AuthType.None)
  @ApiOperation({ summary: 'Create a new fishing spot' })
  @ApiBody({ type: CreateFishingSpotDto })
  @ApiResponse({
    status: 201,
    description: 'Fishing spot successfully created',
    type: FishingSpot,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @Post()
  async create(
    @Body() createFishingSpotDto: CreateFishingSpotDto,
  ): Promise<FishingSpot> {
    return this.fishingSpotsService.create(createFishingSpotDto);
  }

  @ApiBearerAuth('access-token') // Requires an access token
  @ApiOperation({ summary: 'Retrieve all fishing spots' })
  @ApiResponse({
    status: 200,
    description: 'List of fishing spots',
    type: [FishingSpot],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get()
  findAll(@ActiveUser() user: ActiveUserData) {
    console.log('user', user);
    return this.fishingSpotsService.findAll();
  }

  @ApiBearerAuth('access-token') // Requires an access token
  @ApiOperation({ summary: 'Retrieve a fishing spot by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Fishing spot ID' })
  @ApiResponse({
    status: 200,
    description: 'Fishing spot found',
    type: FishingSpot,
  })
  @ApiResponse({ status: 404, description: 'Fishing spot not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fishingSpotsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a fishing spot' })
  @ApiParam({ name: 'id', type: String, description: 'Fishing spot ID' })
  @ApiBody({ type: UpdateFishingSpotDto })
  @ApiResponse({
    status: 200,
    description: 'Fishing spot successfully updated',
    type: FishingSpot,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 404, description: 'Fishing spot not found' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFishingSpotDto: UpdateFishingSpotDto,
  ) {
    return this.fishingSpotsService.update(+id, updateFishingSpotDto);
  }

  @ApiOperation({ summary: 'Delete a fishing spot' })
  @ApiParam({ name: 'id', type: String, description: 'Fishing spot ID' })
  @ApiResponse({
    status: 200,
    description: 'Fishing spot successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Fishing spot not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fishingSpotsService.remove(+id);
  }
}
