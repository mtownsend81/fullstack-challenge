module ComicDetailsRepresenter
  include Roar::JSON

  property :id
  property :title
  property :dates
  property :thumbnail
  property :issueNumber
  property :variantDescription
  property :ISBN
  property :characters
  property :images
  property :creators
end