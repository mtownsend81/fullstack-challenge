require 'comics'

class FetchComicDetails
  include ::UseCase

  attr_reader :result

  def initialize(comic_id, comics: Comics)
    @comic_id = comic_id
    @comics = comics
  end

  def perform
    @result = fetch_comic_details
  end

  private

  attr_reader :comics

  def fetch_comic_details
    comics.find_by_id(@comic_id)
  end
end
